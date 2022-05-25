export default function SelectItem(props) {

    return (
        <>
            {(props?.select && Object.keys(props?.select).length > 0) ?
                <div>
                    Seleccionado
                    <div>id:{props?.select?.userId}</div>
                    <div>nombre:{props?.select?.firstName}</div>
                    <div>apellido:{props?.select?.lastName}</div>
                    <div>phoneNumber:{props?.select?.phoneNumber}</div>
                    <div>mail:{props?.select?.emailAddress}</div>
                </div>
                : ""}
        </>




    )
}