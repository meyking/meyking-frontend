// Shared design values for the refreshed pages. The blues come from the logo.
export const colors = {
    ink: "#14202B",
    muted: "#5B6B79",
    brand: "#0065B3",
    brandDark: "#00518F",
    surface: "#F3F7FA",
    line: "#E2E8ED",
    white: "#FFFFFF",
};

export const fontFamily = '"Hanken Grotesk", "Helvetica Neue", Arial, sans-serif';
export const headingFamily = '"Fraunces", Georgia, serif';

export const container = {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
    boxSizing: "border-box" as const,
};

export const contact = {
    phone: "(514) 731-8868",
    phoneHref: "tel:+15147318868",
    fax: "(514) 731-8838",
    email: "info@meyking.com",
    mapUrl: "https://goo.gl/maps/BFiMvii8yGjmeE5n7",
    addressLines: [
        "5475, rue Paré, suite 228",
        "Mont-Royal, Québec, H4P 1P7, Canada",
    ],
};
