import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Bare-Bones App</h1>
        <p className="text-lg text-gray-600 mb-4">This is a starting point for your application. You can modify and build upon this structure.</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Add new pages and components</li>
          <li>Implement your business logic</li>
          <li>Customize the styling to match your brand</li>
          <li>Integrate with backend services</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Index;
