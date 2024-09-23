import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton.jsx";

function suprise() {
    return (
        // <img src={mix('storage/app/public')} alt={props.image} />
        alert("shoooooooo")
    )
}
export default function GoodsList() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Goods, dobroty a iné srandy</h2>}
        >
            <Head title="Goods" />

            <button onClick={suprise}> nig </button>
        </AuthenticatedLayout>
    );
}
