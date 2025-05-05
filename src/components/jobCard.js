import React from "react";
import {
  Box,
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

export default function JobCard({
  company,
  logo,
  new: isNew,
  featured: isFeatured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  tools,
  onTagClick,
  activeTags = [],
}) {
  const tealMain = "#008080";
  const tealLight = "#F0FAFB";
  const tags = [role, level, ...(tools || [])];

  return (
    <Card
      variant="outlined"
      sx={{
        marginX: { xs: 4, sm: 12 },
        marginY: { xs: 7, sm: 5 },
        borderLeft: isFeatured ? `6px solid ${tealMain}` : undefined,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        gap: { xs: 2, sm: 4 },
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        boxShadow: "0 10px 10px -4px rgba(0,0,0,0.15)",
        position: "relative",
        overflow: "visible",
      }}
    >
      <Avatar
        src={logo}
        alt={company}
        variant="rounded"
        sx={{
          backgroundColor: "transparent",
          width: { xs: 64, sm: 64 },
          height: { xs: 64, sm: 64 },
          mb: { xs: 1.5, sm: 0 },
          flexShrink: 0,
          position: { xs: "absolute", sm: "static" },
          top: { xs: 0, sm: 0 },
          transform: { xs: "translateY(-50%)", sm: "none" },
        }}
      />

      <CardContent
        sx={{
          flex: 1,
          p: 0,
          pt: { xs: 4, sm: 0 },
          "&:last-child": { pb: 0 },
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" mb={1}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 800, color: tealMain }}
          >
            {company}
          </Typography>
          {isNew && (
            <Chip label="NEW!" size="small" sx={{ fontWeight: 'bold', backgroundColor: tealMain, color: "white", }} />
          )}
          {isFeatured && (
            <Chip
              label="FEATURED"
              size="small"
              sx={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "bold",
              }}
            />
          )}
        </Stack>

        <Typography variant="h6" fontWeight="bold" mb={{ xs: 1, sm: 0 }}
          sx={{
            cursor: 'pointer',
            transition: 'color 0.2s',
            '&:hover': { color: tealMain },
          }}
        >
          {position}
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          color="text.secondary"
          flexWrap="wrap"
          variant="body2"
          fontSize="0.875rem"
          mb={1}
        >
          <Typography fontWeight="bold">{postedAt}</Typography>
          <Typography fontWeight="bold">•</Typography>
          <Typography fontWeight="bold">{contract}</Typography>
          <Typography fontWeight="bold">•</Typography>
          <Typography fontWeight="bold">{location}</Typography>
        </Stack>
      </CardContent>

      <Divider orientation="horizontal"
        flexItem sx={{ display: { sm: "none", xs: "block" }, mx: 2 }}
      />

      <Box
        sx={{
          borderRadius: 0,
          px: 1,
          py: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: 1.5,
          width: { xs: "100%", sm: "auto" },
          mt: { xs: 1.5, sm: 0 },
          alignItems: "center",
          justifyContent: { xs: "flex-start", sm: "flex-start" },
        }}
      >
        {tags.map((tag, index) => {
          const isActive = activeTags.includes(tag);
          return (
            <Chip
              key={index}
              label={
                <Typography fontWeight="bold" color="inherit">
                  {tag}
                </Typography>
              }
              clickable
              onClick={() => onTagClick(tag)}
              sx={{
                backgroundColor: isActive ? tealMain : tealLight,
                color: isActive ? "#fff" : tealMain,
                borderRadius: 1,
                fontWeight: 700,
                fontSize: 18,
                height: 40,
                '&:hover': {
                  backgroundColor: tealMain,
                  color: '#fff',
                  cursor: 'pointer'
                },
                boxShadow: "none",
              }}
            />
          );
        })}
      </Box>
    </Card>
  );
}