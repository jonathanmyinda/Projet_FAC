import { useTranslation } from "react-i18next";


export default function Home() {
const { t } = useTranslation();


return (
<section className="px-6 py-20 text-center bg-white">
<h1 className="text-4xl font-bold text-forest mb-4">{t("home.title")}</h1>
<p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
{t("home.mission")}
</p>
<button className="bg-forest text-white px-6 py-3 rounded-lg shadow-lg">
{t("home.cta")}
</button>
</section>
);
}