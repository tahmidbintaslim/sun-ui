import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        alpha12?: string;
        alpha20?: string;
        alpha30?: string;
        alpha40?: string;
    }

    interface TypeBackground {
        alpha: string;
    }
}

declare module '@mui/material' {
    interface ButtonPropsVariantOverrides {
        solid: true;
        soft: true;
        outlined: true;
        ghost: true;
        plain: true;
    }

    interface TextFieldPropsVariantOverrides {
        solid: true;
        soft: true;
        outlined: true;
        ghost: true;
        plain: true;
    }

    interface CheckboxPropsVariantOverrides {
        solid: true;
        soft: true;
        outlined: true;
        ghost: true;
        plain: true;
    }

    interface RadioPropsVariantOverrides {
        solid: true;
        soft: true;
        outlined: true;
        ghost: true;
        plain: true;
    }

    interface SwitchPropsVariantOverrides {
        solid: true;
        soft: true;
        outlined: true;
        ghost: true;
        plain: true;
    }

    interface SelectPropsVariantOverrides {
        solid: true;
        soft: true;
        outlined: true;
        ghost: true;
        plain: true;
    }
}
