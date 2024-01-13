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
console.log(data)
return data;
}
const ProductPage = async() =>{
    const livres=await getBooks()
    
  return (
   <div className="container">
      <ListLivres livres={livres}/>  
    </div>
  )
}

export default ProductPage
