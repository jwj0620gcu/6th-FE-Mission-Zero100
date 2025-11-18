import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { fetchUserByEmail, signupUser } from "@/api/auth";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!name || !email || !password) {
            alert("모든 항목을 입력하세요.");
            return;
        }

        try {
            const exists = await fetchUserByEmail(email);

            if (exists.length > 0) {
                alert("이미 존재하는 아이디입니다.");
                return;
            }

            await signupUser({ name, email, password });

            alert("회원가입 성공!");
            navigate("/login");

        } catch (error) {
            console.error(error);
            alert("회원가입 중 오류가 발생했습니다.");
        }
    };

    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
          <div className="w-[360px] p-6 bg-gray-200 border border-gray-200 rounded-md shadow-sm">
              <Text as="h2" className="text-2xl font-bold mb-6 text-center">
                  회원가입
              </Text>

              <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                      <label className="w-20 text-sm font-bold text-gray-800">이름</label>
                      <Input
                        className="flex-1 border border-gray-400 rounded-xl px-2 py-2 text-sm"
                        placeholder="이름 입력"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                  </div>

                  <div className="flex items-center space-x-2">
                      <label className="w-20 text-sm font-bold text-gray-800">아이디</label>
                      <Input
                        className="flex-1 border border-gray-400 rounded-xl px-2 py-2 text-sm"
                        placeholder="아이디 입력 (이메일)"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>

                  <div className="flex items-center space-x-2">
                      <label className="w-20 text-sm font-bold text-gray-800">비밀번호</label>
                      <Input
                        className="flex-1 border border-gray-400 rounded-xl px-2 py-2 text-sm"
                        type="password"
                        placeholder="비밀번호 입력"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
              </div>

              <Button
                variant="primary"
                className="w-40 py-2 text-sm font-medium mt-6 mx-auto block rounded-md"
                onClick={handleSignup}
              >
                  회원가입
              </Button>
          </div>
      </div>
    );
}
