import { Navigation } from 'components/blocks/navigation/navigation';
import { Footer } from 'components/blocks/footer/footer';
import { Head } from 'components/partials/head/head';

const Page = ({ data, children }) => {

  return ( 
    <div className={'page'}>		
      <Head data={{ title: data.title }}/>
      <Navigation />
      { children }
      <Footer />
    </div>
  )
};

export {
  Page
};