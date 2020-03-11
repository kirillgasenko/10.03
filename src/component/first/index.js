import React, { Component } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import { Button, Layout, Pagination, Input, Modal } from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

class First extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <div className="first">
                <h1>antd</h1>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={(value) => console.log(value)}
                />
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <Pagination defaultCurrent={1} total={50} />
                <Button type="primary" style={{ marginLeft: 8 }}>
                    Primary Button
                </Button>
            </div>
        );
    }
}

export default First;
