import listStyle from "../../assets/images/adopt-list-style.svg";
import lines from "../../assets/images/adopt-lines.svg";
import scratch from "../../assets/images/adopt-scratch.svg";
import mask from "../../assets/images/adopt-mask.svg";
import dogAvifDesktop from "../../assets/images/adopt_desktop.avif";
import dogAvifTablet from "../../assets/images/adopt_tablet.avif";
import dogAvifMobile from "../../assets/images/adopt_mobile.avif";
import dogWebpDesktop from "../../assets/images/adopt_desktop.webp";
import dogWebpTablet from "../../assets/images/adopt_tablet.webp";
import dogWebpMobile from "../../assets/images/adopt_mobile.webp";
import dogJpgDesktop from "../../assets/images/adopt_desktop.jpg";
import dogJpgTablet from "../../assets/images/adopt_tablet.jpg";
import dogJpgMobile from "../../assets/images/adopt_mobile.jpg";

interface Devices {
	desktop: string;
	tablet: string;
	mobile: string;
}

interface Dog {
	mask: string;
	avif: Devices;
	webp: Devices;
	jpg: Devices;
}

interface Images {
	listStyle: string;
	lines: string;
	scratch: string;
	dog: Dog;
}

const Images: Images = {
	listStyle,
	lines,
	scratch,
	dog: {
		mask,
		avif: {
			desktop: dogAvifDesktop,
			tablet: dogAvifTablet,
			mobile: dogAvifMobile,
		},
		webp: {
			desktop: dogWebpDesktop,
			tablet: dogWebpTablet,
			mobile: dogWebpMobile,
		},
		jpg: {
			desktop: dogJpgDesktop,
			tablet: dogJpgTablet,
			mobile: dogJpgMobile,
		},
	},
};

export default Images;
