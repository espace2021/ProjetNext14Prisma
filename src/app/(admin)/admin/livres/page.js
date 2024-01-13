import dynamic from 'next/dynamic';
import Loading from './loading';

const ListLivres = dynamic(() => import('@/components/admin/listLivres'), { 
  loading: () => <Loading />,
  ssr: false,
});

//import ListLivres from '@/components/admin/listLivres';

const getBooks=async()=>{ 
const response = await fetch(process.env.URL +"/api/livres", { cache: 'no-store' });

const data = await response.json();

return data;
}
const ProductPage = async() =>{
    const livres=await getBooks()
    console.log(livres)
  return (
   <div className="container">
      <ListLivres livres={livres}/>  
    </div>
  )
}

export default ProductPage
