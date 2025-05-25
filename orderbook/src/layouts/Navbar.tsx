import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Button,
  Box,
  InputLabel,
  FormControl
} from "@mui/material";
import { styled } from "@mui/system";

const palette = {
  background: "#0e0e10",
  textPrimary: "#e0e0e0",
  textSecondary: "#202630",
  highlight: "#2b2b2e",
  green: "#00c853",
  red: "#ff1744",
  buttonBg: "#1e1e22",
  yellow: "#FDD534"
};

const StyledAppBar = styled(AppBar)({
  backgroundColor: palette.highlight,
  color: palette.textPrimary
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const BottomBar = styled(Box)({
  position: "fixed",
  bottom: 20,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "1rem"
});

type Inputs = {
  spreadValue?: number;
  spreadPercentage?: number;
  selectedMenu?: number;
};

const OrderBookUI = ({ spreadValue, spreadPercentage, selectedMenu = 0.5 }: Inputs) => {
  return (
    <Box sx={{ backgroundColor: palette.background, height: "100vh", color: palette.textPrimary }}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Typography variant="h6" fontWeight="bold">
            OrderBook
          </Typography>
          <Typography variant="body1">
            Spread: {spreadValue} ({spreadPercentage}%)
          </Typography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="group-select-label" sx={{ color: palette.textPrimary }}>
              Group
            </InputLabel>
            <Select
              labelId="group-select-label"
              id="group-select"
              value={selectedMenu}
              label="Group"
              sx={{
                color: palette.textPrimary
              }}
            >
              <MenuItem value={0.5}>0.50</MenuItem>
              <MenuItem value={0.1}>0.1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </FormControl>
        </StyledToolbar>
      </StyledAppBar>

      <BottomBar>
        <Button variant="contained" sx={{ backgroundColor: palette.yellow, color: palette.textSecondary }}>
          Toggle Feed
        </Button>
        <Button variant="contained" sx={{ backgroundColor: palette.red, color: palette.textPrimary }}>
          Kill Feed
        </Button>
      </BottomBar>
    </Box>
  );
};

export default OrderBookUI;
