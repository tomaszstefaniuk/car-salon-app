import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { Checkbox, ChevronDownIcon } from '~/components/atoms';
import { CARS } from '~/constants/cars';

export const FormSectionComponent: FC = () => {
  const [selectedCarName, setSelectedCarName] = useState<string>(CARS[0].name);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isApproveChecked, setIsApproveChecked] = useState<boolean>(false);
  const [isEmailChecked, setIsEmailChecked] = useState<boolean>(false);
  const [isPhoneNumberChecked, setIsPhoneNumberChecked] =
    useState<boolean>(false);
  const [isTextMessageChecked, setTextMessageChecked] =
    useState<boolean>(false);

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectedCarName(e.target.value);
  };

  return (
    <Box sx={{ backgroundColor: 'white.dark' }}>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingY: 16,
        }}
      >
        <Typography color="black.main" sx={{ marginBottom: 1 }}>
          Jazda próbna
        </Typography>
        <Typography
          variant="h4"
          color="black.main"
          textAlign="center"
          maxWidth={400}
        >
          Umów się na bezpłatną jazdę próbną
        </Typography>
        <Select
          id="select"
          value={selectedCarName}
          onChange={handleChange}
          IconComponent={ChevronDownIcon}
          sx={{ marginTop: 10, marginBottom: 2 }}
        >
          {CARS.map((car) => {
            return (
              <MenuItem key={car.name} value={car.name} sx={{ width: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Box
                    component="img"
                    src={car.imageSmall}
                    alt={car.imageAlt}
                    sx={{ height: 140 }}
                  />
                  <Typography
                    color="black.light"
                    variant="caption"
                    sx={{ marginRight: 'auto' }}
                  >
                    {car.title}
                  </Typography>
                </Box>
              </MenuItem>
            );
          })}
        </Select>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
        >
          <TextField
            label="Imię *"
            variant="standard"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            label="Nazwisko (opcjonalnie)"
            variant="standard"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            label="Adres e-mail *"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Nr. telefonu *"
            variant="standard"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Typography variant="h5" color="black.main">
            * Pole wymagane
          </Typography>
          <Typography variant="h5" color="black.main" sx={{ marginTop: 2 }}>
            Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w
            celu przedstawienia informacji handlowej w wybrany przez Ciebie
            sposób w związku
            <Box component="span" sx={{ textDecoration: 'underline' }}>
              Czytaj więcej
            </Box>
          </Typography>
          <Typography variant="h5" color="black.main">
            Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości
            przedstawiania Ci atrakcyjnych ofert / promocji produktów,
            akcesoriów i usług marki CUPRA w przyszłości.
          </Typography>
          <Box>
            <Checkbox
              label={
                'Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka' +
                'Komandytowa w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki ' +
                'CUPRA oraz innych powiązanych z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za pomocą:'
              }
              sx={{ marginTop: 2 }}
              isChecked={isApproveChecked}
              onChange={(e) => setIsApproveChecked(e.target.checked)}
            />
            <Box sx={{ marginY: 2 }}>
              <Checkbox
                label={'Email'}
                sx={{ marginTop: 2 }}
                isChecked={isEmailChecked}
                onChange={(e) => setIsEmailChecked(e.target.checked)}
              />
            </Box>
            <Box sx={{ marginBottom: 2 }}>
              <Checkbox
                label={'Telefon'}
                sx={{ marginTop: 2 }}
                isChecked={isPhoneNumberChecked}
                onChange={(e) => setIsPhoneNumberChecked(e.target.checked)}
              />
            </Box>
            <Box>
              <Checkbox
                label={'Wiadomość SMS/MMS'}
                sx={{ marginTop: 2 }}
                isChecked={isTextMessageChecked}
                onChange={(e) => setTextMessageChecked(e.target.checked)}
              />
            </Box>
            <Typography variant="h5" color="black.main" sx={{ marginY: 2 }}>
              Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i
              usunięcia swoich danych oraz do wycofania w każdym momencie swojej
              zgody.
            </Typography>
            <Typography
              variant="h5"
              color="black.main"
              sx={{ marginBottom: 2 }}
            >
              Twoje dane będą przetwarzane tylko w stopniu umożliwiającym
              realizację wymienionego celu.
            </Typography>
            <Typography variant="h5" color="black.main">
              Administratorem Twoich danych jest Plichta spółka z ograniczoną
              odpowiedzialnością Spółka Komandytowa, z siedzibą w Wejherowie
              przy ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą
              polityką prywatności umieszczoną pod linkiem:
              <Box component="span" sx={{ textDecoration: 'underline' }}>
                https://www.plichta.com.pl/polityka-prywatnosci
              </Box>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ display: 'block', marginX: 'auto', marginTop: 4 }}
            >
              Umów jazdę próbną
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
