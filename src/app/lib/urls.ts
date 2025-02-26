const Urls = {
    electoratesByCp: process.env.NEXT_PUBLIC_HOST ? `${process.env.NEXT_PUBLIC_HOST}dashboardContent/custom-electorates-v2/` : 'http://localhost:8080/dashboardContent/custom-electorates-v2/',
    //reps: process.env.HOST || 'http://localhost:8080/dashboardContent/reps-by-elects/',
    repsByElectorate:  process.env.NEXT_PUBLIC_HOST ? `${process.env.NEXT_PUBLIC_HOST}dashboardContent/custom-representatives-v2/` : 'http://localhost:8080/dashboardContent/custom-representatives-v2/',
    leadsCreate:  process.env.NEXT_PUBLIC_HOST ? `${process.env.NEXT_PUBLIC_HOST}dashboardContent/leads/` : 'http://localhost:8080/dashboardContent/leads/'
}
export { Urls }