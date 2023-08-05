import LayoutPage from "../components/Layout";

import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import { Card } from "antd";

const { Meta } = Card;

const Index = ({ people }) => {
    let peopleList = people ? (
        people.map(person => (
            <Link href="/detail/[id]" as={ `/detail/${ person.id }` }>
                <Card
                    key={person.id}
                    hoverable
                    style={{ width: '25vw', textAlign: "center", display: "inline-block", margin: 20 }}
                    cover={<img alt={person.first_name} src={person.avatar} />}
                >
                    <Meta title={`${person.first_name} ${person.last_name}`} description={person.email} />
                </Card>
            </Link>
        ))
    ) : <p>Loading...</p>;
    return (
        <LayoutPage>
            <div className="people-list" style={{ textAlign: "center" }}>
                {peopleList}
            </div>
        </LayoutPage>
    );
}

Index.getInitialProps = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();

    return {
        people: data.data
    }
}

export default Index