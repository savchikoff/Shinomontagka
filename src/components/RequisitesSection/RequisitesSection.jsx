import { Table } from "antd"
import { COLUMNS, DATA } from "../../constants/requisitesData";

function RequisitesSection() {
    return (
        <Table dataSource={DATA} columns={COLUMNS} showHeader={false} pagination={false} align="left" />
    )
};

export default RequisitesSection;


