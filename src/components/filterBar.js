import {Card, Chip, Typography, Box, Stack, ButtonBase} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function FilterBar({ filters = [], onRemove, onClear }) {
  if (filters.length === 0) return null;

  const tealMain = "#008080";
  const tealLight = "#F0FAFB";

  return (
    <Card
      sx={{
        marginX: { xs: 2, sm: 12 },
        marginY: { xs: 0, sm: 4 },
        px: { xs: 2, sm: 4 },
        py: { xs: 2, sm: 2 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 10px 10px -4px rgba(0,0,0,0.12)",
        borderRadius: 2,
        minHeight: 64,

        my: 0,
        mt: { xs: -6, sm: -5 }, 
        mx: { xs: 2, sm: 12 },
        zIndex: 2,
        position: 'relative',
      }}
    >
      <Stack direction="row" spacing={2} flexWrap="wrap" alignItems="center">
        {filters.map((tag) => (
          <Box key={tag} sx={{ display: "flex", alignItems: "center" }}>
            <Chip
              label={
                <Typography fontWeight="bold" color="inherit">
                  {tag}
                </Typography>
              }
              sx={{
                "& .MuiChip-label": { px: 0.5 }, 
                backgroundColor: tealLight,
                color: tealMain,
                fontWeight: 800,
                fontSize: 18,
                borderRadius: '4px 0 0 4px',
                boxShadow: "none",
                height: 40,
                px: 1.5,
              }}
            />
            <ButtonBase
              sx={{
                background: tealMain,
                color: "#fff",
                px: 1.2,
                height: 40,
                borderRadius: "0 4px 4px 0",
                "&:hover": { background: "black" }
              }}
              onClick={() => onRemove(tag)}
            >
              <CloseIcon fontSize="small" />
            </ButtonBase>
          </Box>
        ))}
      </Stack>
      <Typography
        sx={{
          color: "text.secondary",
          fontWeight: 600,
          fontSize: 18,
          cursor: "pointer",
          mr: 1.5,
          transition: "color 0.2s",
          "&:hover": { color: "#008080", textDecoration: "underline" }
        }}
        onClick={onClear}
      >
        Clear
      </Typography>
    </Card>
  );
}