import qs from 'qs';

const About = ({location}) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true // URL ?abc=true 에서 ?를 생략시키는 역할
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>About</h1>
      <p>Router About</p>
      {showDetail && <p>detail is true</p>}
    </div>
  )
};

export default About;