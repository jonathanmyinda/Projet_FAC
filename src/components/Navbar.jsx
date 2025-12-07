import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Navbar() {
const { t, i18n } = useTranslation();


return (
<nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
<h1 className="text-xl font-bold text-forest">ONG RDC</h1>


<div className="flex gap-6 items-center">
<Link to="/" className="hover:text-forest">{t("navbar.home")}</Link>
<Link to="/projects" className="hover:text-forest">{t("navbar.projects")}</Link>
<Link to="/gallery" className="hover:text-forest">{t("navbar.gallery")}</Link>
<Link to="/donate" className="hover:text-forest">{t("navbar.donate")}</Link>
<Link to="/contact" className="hover:text-forest">{t("navbar.contact")}</Link>
</div>


<select
onChange={(e) => i18n.changeLanguage(e.target.value)}
className="border rounded px-2 py-1"
>
<option value="fr">FR</option>
<option value="en">EN</option>
</select>
</nav>
);
}