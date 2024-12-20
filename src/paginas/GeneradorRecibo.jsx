import { UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

//import Navbar from '../components/Navbar'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const db = createClient(supabaseUrl, supabaseKey)


const GeneradorRecibo = ()=> {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data, error } = await db.from('users').select('name, last_name');

            if (error) {
                console.error(error);
            } else {
                setUsers(data);
            }
        };
        fetchUsers();
    }, []);
    

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">--Pagos SET--</div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a>Registrar alumno</a></li>
                            <li><a><UserButton /></a></li>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
                <div>
                    <h1>Sistema de pagos Colegio SET</h1>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a><UserButton /></a></li>
                    <li><a>Registrar alumno</a></li>
                </ul>
            </div>
        </div>
    );
};

export default GeneradorRecibo;