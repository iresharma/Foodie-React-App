import { Menu } from 'antd';
import { LinkedinOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';
 
const connect = (
    <Menu>
        <Menu.Item icon={<GithubOutlined />}>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/iresharma">
                Github
        </a>
        </Menu.Item>
        <Menu.Item icon={<InstagramOutlined />}>
            <a target="_blank" rel="noopener noreferrer" href="https://istagram.com/iresharma.py">
                <code>@iresharma.py</code>
            </a>
        </Menu.Item>
        <Menu.Item icon={<InstagramOutlined />}>
            <a target="_blank" rel="noopener noreferrer" href="https://istagram.com/watchireshstruggle">
                <code>@watchireshstruggle</code>
            </a>
        </Menu.Item>
        <Menu.Item icon={<LinkedinOutlined />}>
            <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/iresharma">
                LinkedIn
        </a>
        </Menu.Item>
    </Menu>
);

const APIs = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noreferrer" style={{
                color: 'red'
            }} rel="noopener" href="https://developers.zomato.com/api">
                Zomato API
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noreferrer" style={{
                color: 'green'
            }} rel="noopener" href="https://spoonacular.com/food-api/">
                Spoonacular API
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://unsplash.com/developers">
                Unsplash API
        </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://ant.design">
                Antdesign
        </a>
        </Menu.Item>
    </Menu>
);

export { APIs, connect };