import { Card, Badge, List, Button } from "antd";

import fetch from "isomorphic-unfetch";
import Layout from '../../components/Layout';

const { Meta } = Card;

const Detail = ({ person, error }) => {
    return (
        <Layout>
            {
                !error ? (
                    <div style={{ textAlign: "center" }}>
                        <Card
                            style={{ width: '40vw', height: '50vh', textAlign: "center", display: "inline-block" }}
                            cover={
                                <img
                                    alt={`${person.data.first_name} ${person.data.last_name}`}
                                    src={person.data.avatar}
                                    style={{ width: '40vw', height: '50vh' }}
                                />
                            }
                        >
                            <Meta
                                title={`${person.data.first_name} ${person.data.last_name}`}
                                description={
                                    <List
                                        size="large"
                                        header={
                                            <div style={{ textAlign: "center" }}>
                                                <p>
                                                    <Badge count="Email: " /> {person.data.email}
                                                </p>
                                            </div>
                                        }
                                        footer={
                                            <div style={{ textAlign: "center" }}>
                                                <p>
                                                    <Badge count="Bio: " style={{ backgroundColor: 'orange' }} /> {person.support.text}
                                                </p>
                                                <p>
                                                    <Badge count="Url: " style={{ backgroundColor: '#108ee9' }} /> {person.support.url}
                                                </p>
                                            </div>
                                        }
                                        bordered
                                        dataSource={[<Button type="primary" style={{ marginLeft: "auto", marginRight: "auto" }}>Site Info</Button>]}
                                        renderItem={item => <List.Item>{item}</List.Item>}
                                    />
                                }
                            />
                        </Card>
                    </div>
                ) : <div>{error}</div>
            }
        </Layout>
    );
}

Detail.getInitialProps = async (context) => {
    const id = context.query.id;

    if (id !== null || id) {
        const res = await fetch(`https://reqres.in/api/users/${id}`);
        const data = await res.json();

        return {
            person: data
        }
    }
    else
        return {
            error: "User could not found"
        };
}

export default Detail;
