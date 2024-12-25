import { createClient } from '@supabase/supabase-js'

//import Navbar from '../components/Navbar'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const db = createClient(supabaseUrl, supabaseKey)

const Usuarios = ()=> {

    return (
        <div>
            <h1>Sistema de pagos Colegio SET</h1>
                    <ul>
                        {users.map((user) => (
                                <li key={user.id}>{user.name} {user.last_name}</li>
                        ))}
                    </ul>
        </div>
    )
}
export default Usuarios;