import SideBar from "@/components/admin/sideBar";

export default function AdminLayout({ children }) {
  return (
    <div className="row mt-4">
    <div className="col-md-1">
    <SideBar />
    </div>
    <div className="col-md-11">
    {children}
    </div>
    </div>
    
  )
}
