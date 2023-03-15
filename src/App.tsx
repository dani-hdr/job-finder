import MainLayout from "./components/layout/main";
import Home from "./pages/Home";
function App() {
  return (
    <>
     <MainLayout>
      <Home/>
     </MainLayout>
    </>
  );
}

export default App;
{/* <Header />
<Container  maxWidth='xl'>
 
  <Stack direction='row' justifyContent='center' gap={2}>
     {/* Left Side */}
  // <Stack >
  //   <Filter/>
  // </Stack>
  //    {/* Center */}
  //    <Stack gap={3} >
  //   {" "}
  //   <Search />
  //   <Box
  //     component="section"
  //     sx={{
  //       display: "flex",
        
  //       alignItems: "start",
  //       gap:3,
  //       justifyContent: "space-between",
  //     }}
  //   >
  //     <Typography variant="h4" fontWeight="bold" component="h3">
  //       Popular
  //     </Typography>
  //     <Stack spacing={2}>
  //       <Pagination count={10} shape="rounded" />
  //     </Stack>
  //   </Box>
  //   <PopularList />
  //   <Typography variant="h4" fontWeight="bold" component="h3">
  //     Now Hiring
  //   </Typography>
  //   <HiringList />
  // </Stack>
  //   {/* Right side */}
  //   <Stack spacing={3}  >
  //   <Profile/>
  //   <PremiumAccount/>
  // </Stack>
  // </Stack>
 


// </Container> */}