import React, {Component} from 'react';
import {render} from "react-dom";
// // import { Icon } from 'antd'
import { BackTop, Carousel, Tag, Input, Tooltip, Button } from 'antd'

export default class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['Unremovable', '浙江科技学院', '自然山与水'],
            inputVisible: false,
            inputValue: '',
            color: ['#f50','#2db7f5','#87d068','#108ee9','#393E46']
        };
        this.handleClose = (removedTag) => {
            const tags = this.state.tags.filter(tag => tag !== removedTag);
            console.log(tags);
            this.setState({ tags });
        }

        this.showInput = () => {
            this.setState({ inputVisible: true }, () => this.input.focus());
        }

        this.handleInputChange = (e) => {
            this.setState({ inputValue: e.target.value });
        }

        this.handleInputConfirm = () => {
            const state = this.state;
            const inputValue = state.inputValue;
            let tags = state.tags;
            if (inputValue && tags.indexOf(inputValue) === -1) {
                tags = [...tags, inputValue];
            }
            console.log(tags);
            this.setState({
                tags,
                inputVisible: false,
                inputValue: '',
            });
        }
        this.saveInputRef = input => this.input = input
    }
    componentDidMount() {
        
    }
    render() {
        const { tags, inputVisible, inputValue } = this.state;
        return (
            <div className="Tag">
                {tags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag key={tag} closable={index !== 0} className="Tag-item" afterClose={() => this.handleClose(tag) } color={this.state.color[Math.round(Math.random()*4)]}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
                }) }
                {inputVisible && (
                    <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                        />
                ) }
                {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
            </div>
        );
    }

}