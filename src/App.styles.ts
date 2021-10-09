import styled  from "styled-components"

export const Container = styled.div`
    background-color: #1B262C;
    color: #F8F8F8;
    min-height: 100vh;
`
export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px;
`
export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`
export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`
export const UploadForm = styled.form`
    background-color: #0F4C75;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #F037A5;
        border: 0;
        color: #F8F8F8;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`