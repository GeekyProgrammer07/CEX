import { Typography } from "@mui/material";

type HeadingsProps = {
    variant?: string,
    color?: string,
};

export const Headings = ({ color, variant }: HeadingsProps) => {
    return (
        <Typography variant={variant} color={color}>
            Hello from Headings
        </Typography>
    );
};
