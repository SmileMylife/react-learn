import { Picker, List, WhiteSpace } from 'antd-mobile';
import React from "react";

import { district, provinceLite } from 'antd-mobile-demo-data';

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
    <div
        onClick={props.onClick}
        style={{ backgroundColor: '#fff', paddingLeft: 15 }}
    >
        <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
            <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
            <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
        </div>
    </div>
);

const seasons = [
    {
        label: 'YNT1102'+ "---" + '张佩|YNT1102' + "---" + "这是派转工作组",
        value: '2013',
    },
    {
        label: '2014      我还能说',
        value: '2014',
    },
];

const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',
};

const colors = [
    {
        label:
            (<div>
      <span
          style={{ ...colorStyle, backgroundColor: '#FF0000' }}
      />
                <span>红色</span>
            </div>),
        value: '#FF0000',
    },
    {
        label:
            (<div>
      <span
          style={{ ...colorStyle, backgroundColor: '#00FF00' }}
      />
                <span>绿色</span>
            </div>),
        value: '#00FF00',
    },
    {
        label:
            (<div>
      <span
          style={{ ...colorStyle, backgroundColor: '#0000FF' }}
      />
                <span>蓝色</span>
            </div>),
        value: '#0000FF',
    },
];

class TestAnt extends React.Component {
    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: [],
        sValue: ['2013', '春'],
        visible: false,
        colorValue: ['#00FF00'],
    };

    render() {
        return (<div>
            <WhiteSpace size="lg" />
            <List style={{ backgroundColor: 'white' }} className="picker-list">
                <Picker extra="请选择(可选)"
                        data={seasons}
                        title="Areas"
                        onOk={e => console.log('ok', e)}
                        onDismiss={e => console.log('dismiss', e)}
                        cols={1}
                >
                    <List.Item arrow="horizontal">Multiple & cascader</List.Item>
                </Picker>
            </List>
        </div>);
    }
}

export default TestAnt;