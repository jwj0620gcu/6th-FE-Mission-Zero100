import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Text from "@/components/Text";

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
            // 회원정보 등록
            await axios.post("http://localhost:3001/users", {
                name,
                email,
                password,
            });

            alert(" 회원가입 성공! 로그인 페이지로 이동합니다.");
            //  로그인 페이지로 이동
            navigate("/login");
        } catch (error) {
            console.error(error);
            alert(" 회원가입 실패");
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
                            placeholder="아이디 입력"
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
                    className="w-40 py-2 text-sm font-medium mt-6 block mx-auto rounded-md"
                    onClick={handleSignup}
                >
                    회원가입
                </Button>
            </div>
        </div>
    );
}
