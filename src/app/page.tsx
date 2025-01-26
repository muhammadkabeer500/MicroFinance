import LoanCategories from "@/components/loan-categories";
import LoanCalculator from "@/components/loan-calculator";
import Header from "@/components/header";
import Footer from "@/components/footer";


const Home = () => {
  return (
    <div className="bg-yellow-300">
      <Header/>
      <main style={{backgroundColor : "blue" , color : "white"}}>
        <section className="py-12 text-center">
          <h1 className="text-5xl font-bold">Welcome to Saylani Welfare</h1>
          <p className="mt-4">We are here to help you with your loan needs. Choose a category and calculate your loan today!</p>
        </section>

        <LoanCategories />
        <LoanCalculator selectedCategory={undefined} />
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
