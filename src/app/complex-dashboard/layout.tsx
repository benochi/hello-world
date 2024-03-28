// import UserAnalytics from "@components/UserAnalytics";
// import RevenueMetrics from "@components/RevenueMetrics";
// import Notifications from "@components/Notifications";

// export default function DashboardLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <div>
//         {children}
//       </div>
//       <UserAnalytics />
//       <RevenueMetrics />
//       <Notifications />
//     </>
//   )
// }
//! PARALLEL ROUTES STYLE: Slots designated with @<dirname>
//! Slots are not ROUTE segments and do not affect routing. 
//! Also, technically children is @children parallel route.
export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
  }: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
  }) {
    const isLoggedIn = false;
    return isLoggedIn ? (
      <>
        <div>
          {children}
        </div>
        <div style={{ display: "flex", backgroundColor: "white"}}>
          <div style={{display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display:"flex", flex: 1 }}>
            {notifications}
          </div>
        </div>
      </>
    ) : (
      login
    )
  }