import Layout from "../../components/Layout"
export default function News({result}) {
    return(
    <Layout>
      <h1>Top Stories</h1>
    </Layout>)
}

const API_KEY = "z0i28MG302H0LinAOuESJvafliZ1Lm09"
export async function getStaticProps() {
const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
const res = await fetch(URL);
const data = await res.json();
console.log(data.results);
  return {
    props: {
        result: data.results
    }
  }
}
