import { Flex, Spinner } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchLogout, fetchMe } from "../../api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogding, setIsLogding] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setIsLogding(true);
        setUser(me);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);
  const login = (data) => {
    setIsLogding(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };
  const logout = async (callback) => {
    setUser(null);
    setIsLogding(false);
    await fetchLogout();
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    callback()
  };
  
  const values = {
    login,
    user,
    isLogding,
    logout,
  };
  if (loading) {
    <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Spinner
        thickness="4px"
        speed="0.65ms"
        emptyColor="gray.200"
        size={"xl"}
        color={"red"}
      ></Spinner>
    </Flex>;
  }
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
