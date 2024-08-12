
import ChatComponent from "@/components/chatComponent";
import Main from "@/components/main";



export default function Home() {
  return (
         <div className="group w-full  max-h-screen pl-0 peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
            <Main/>
            <ChatComponent/> 
        </div>
    
  );
}
