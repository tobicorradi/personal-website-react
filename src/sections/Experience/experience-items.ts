interface Experience {
  title: string;
  company: string;
  logo: string;
  description: string;
  current: boolean;
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineer",
    company: "The Farmer's Dog",
    logo: "https://media.licdn.com/dms/image/v2/C560BAQHfoSTdF25S7w/company-logo_400_400/company-logo_400_400/0/1654720963053/the_farmers_dog_logo?e=1748476800&v=beta&t=ymBBOnxLWyCl3yTP_OjvT6RinqvPsZuHp8p1DGrqPqQ",
    description: "Building high-performance web applications",
    current: true,
  },
  {
    title: "Lead Software Engineer",
    company: "Fundación Landrú",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQE5LI-xF7bf5Q/company-logo_400_400/company-logo_400_400/0/1644987624485/fundacionlandru_logo?e=1748476800&v=beta&t=ve3GakmLYezy-VqIKk-IBCN2--Q77KF3RtGBHMM71Uk",
    description: "Enhanced user engagement through software development",
    current: false,
  },
  {
    title: "IT Team Leader",
    company: "Digital House",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQH1TYJrMLiA5w/company-logo_400_400/company-logo_400_400/0/1647269265726/digitalhouseschool_logo?e=1748476800&v=beta&t=Z5sucZ7R2j2mi9z55vCXgM6HB-K0_A3LfvWBFuf3e9o",
    description:
      "Led web development bootcamps and managed technical teams",
    current: false,
  },
  {
    title: "Software Engineer",
    company: "Ministerio de Desarrollo Productivo",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGtW54WNLFcrw/company-logo_100_100/company-logo_100_100/0/1712763269355/secretariadeindustriaydesarrolloproductivo_logo?e=1748476800&v=beta&t=Ge28N-BDpJkb_LbBYB03a4rJnT_qUHlsQbB_6qyNcCw",
    description: "Contributed to government digital initiatives",
    current: false,
  },
  {
    title: "Junior Software Engineer",
    company: "LOP",
    logo: "",
    description: "Started professional journey in software development",
    current: false,
  },
];
