import { Table, Td, Th, Tr, Trhead, Main } from "./styleComponets/Table"


export default function MyTable(props) {

    function booleanFilter(item) {
        let ret = true;
        if (props?.filter) {
            if (props?.filterType === "name") {
                ret = (props?.filter.length <= 0 || (item?.firstName.toUpperCase().indexOf(props?.filter) >= 0))
            } else if (props?.filterType === "lastname") {
                ret = (props?.filter.length <= 0 || (item?.lastName.toUpperCase().indexOf(props?.filter) >= 0))
            } else if (props?.filterType === "phone") {
                ret = (props?.filter.length <= 0 || (item?.phoneNumber.toString().indexOf(props?.filter) >= 0))
            }
            else {
                ret = (props?.filter.length <= 0 || (item?.firstName.toUpperCase().indexOf(props?.filter) >= 0)
                    || (item?.lastName.toUpperCase().indexOf(props?.filter) >= 0)
                    || (item?.phoneNumber.toString().indexOf(props?.filter) >= 0)
                    || (item?.userId.toString().indexOf(props?.filter) >= 0))
            }

        }


        return ret
    }

    return (
        <Main>
            <Table>
                <tbody>
                    <Trhead>
                        <Th>Rack</Th>
                        <Th>Name</Th>
                        <Th>Last Name</Th>
                        <Th>Phone</Th>
                    </Trhead>
                    {
                        props?.data
                            ?.filter(data => booleanFilter(data))
                            .map(data => {
                                return (
                                    <Tr key={data?.userId} onClick={() => props?.setSelect(data)}>
                                        <Td>{data?.userId}</Td>
                                        <Td>{data?.firstName}</Td>
                                        <Td>{data?.lastName}</Td>
                                        <Td>{data?.phoneNumber}</Td>
                                    </Tr>
                                )
                            })
                    }
                </tbody>
            </Table>
        </Main>

    )
}