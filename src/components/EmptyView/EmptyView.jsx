import { Empty } from 'antd';
import classes from './EmptyView.module.css'

function EmptyView({ description = "К сожалению, информация отсутствует :(" }) {
    return (
        <div className={classes.emptyContainer}>
            <Empty description={description} />
        </div>
    )
}

export default EmptyView;