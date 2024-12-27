import {Typography, Chip, Stack, Box} from "@mui/material";
 
export default function Page() {
    return (
        <>  
            <Box sx = {{
                backgroundColor : "black",
                height : "95vh",
                display : "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Box sx = {{
                transform : "translateX(-3vw)",
            }}>
            
            <Stack direction={"column"} spacing={2}>
                <Typography variant="h3" sx={{ color: "white", fontWeight : "bold"}}>지원 및 연락</Typography>
                <Typography variant="h5" sx={{ color: "white" }}>인공지능학부 23학번 장근서</Typography>
                <Typography variant="h5" sx={{ color: "white" }}>동아리 지원은 매 학기 국민대학교 에브리타임과 <br />
                    소프트웨어융합대학 단체 채팅방을 통하여 이루어집니다. <br />
                    개별 연락을 원하시는 경우 아래의 연락처로 문의 주세요.</Typography>
            </Stack>
            <br />
            </Box>
            
            <Box sx = {{
                display : "grid",
                gridTemplateColumns : "repeat(2, 1fr)",
                gap : "20px",
                Maxwidth : "600px",
            }}>
                <Chip label={<Typography variant="h6" sx={{ color: "black", fontWeight : 500}}>Email : jangks23@kookmin.ac.kr</Typography>} style={{ backgroundColor: "white", padding : "24px", borderRadius : "30px"}} />
                
            </Box>
            </Box>
        </>
    );
}