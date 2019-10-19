import {Table} from 'antd';
import React from "react";
import ResizeableTitle from "./ResizeableTitle";

class ResizeTable extends React.Component {
    //假数据
    data = [
        {
            key: 0,
            date: '2018-02-11',
            amount: 120,
            type: 'income',
            note: 'transfer',
        },
        {
            key: 1,
            date: '2018-03-11',
            amount: 243,
            type: 'income',
            note: 'transfer',
        },
        {
            key: 2,
            date: '2018-04-11',
            amount: 98,
            type: 'income',
            note: 'transfer',
        },
    ];

    state = {
        columns: [
            {
                title: 'Date',
                dataIndex: 'date',
                width: 200,
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                width: 100,
            },
            {
                title: 'Type',
                dataIndex: 'type',
                width: 100,
            },
            {
                title: 'Note',
                dataIndex: 'note',
                width: 100,
            },
            {
                title: 'Action',
                key: 'action',
                render: () => <a>Delete</a>,
            },
        ],
    };

    components = {
        header: {
            cell: ResizeableTitle,
        },
    };

    handleResize = index => (e, {size}) => {
        this.setState(({columns}) => {
            const nextColumns = [...columns];
            nextColumns[index] = {
                ...nextColumns[index],
                width: size.width,
            };
            return {columns: nextColumns};
        });
    };

    render() {
        const columns = this.state.columns.map((col, index) => ({
            ...col,
            onHeaderCell: column => ({
                width: column.width,
                onResize: this.handleResize(index)
            }),
        }));

        return <Table style={{height: "100%"}}
                      defaultExpandAllRows={true}
                      bordered components={this.components}
                      columns={columns}
                      dataSource={this.data}
                      loading={false}/>;
    }
}

export default ResizeTable;