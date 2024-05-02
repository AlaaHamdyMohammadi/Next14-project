"use client";

// Eash slot pass to layout as a prop so I can destructure it
export default function ComplexLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ?(
    <div className="m-5">
      {children}
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
          <div>{notifications}</div>
          {/* <div>{login}</div> */}
        </div>
      </div>
    </div>
  )
  : login;
}
