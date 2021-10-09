import styled from "styled-components"

export const Container = styled.div`
    background-color: #0F4C75;
    border-radius: 10px;
    padding: 10px;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
    button {
        display: block;
        background-color: #F037A5;
        border: 0;
        color: #F8F8F8;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 10px auto 0 auto;
        cursor: pointer;
        &:hover {
            opacity: .9;
        }
    }
`