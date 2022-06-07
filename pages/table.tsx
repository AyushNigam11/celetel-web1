import axios from "axios"; //npm i axios
 
const Index = ({ userList }) => <div style={{ margin: 20 }}>
  <div className="flex min-h-screen  items-center justify-center bg-white">
  <div className="bg-green-100 rounded-2xl shadow-2xl flex w-2/3 max-w-2xl">
  <table border="1" className=" mb-2 mt-2 ml-3 ">
    <thead>
      <th className=" text-blue-500 text-bold">First Name</th>
      <th className="px-6">Last Name</th>
      <th>Email</th>
      <th>Avatar</th>
    </thead>
    <tbody>
      {userList.data.map((x, i) => <tr key={i}>
        <td>{x.first_name}</td>
        <td className="px-6 text-">{x.last_name}</td>
        <td>{x.email}</td>
        <td><img src={x.avatar} width="50" height="50" /></td>
      </tr>)}
    </tbody>
  </table>
  </div>
  </div>
  
</div>
  
Index.getInitialProps = async () => {
  const { data } = await axios.get('https://reqres.in/api/users');
  return { userList: data };
}
export default Index;