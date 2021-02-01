import styled from 'styled-components';
import wave from '../static/sea@2x.png'

const Programs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 2rem 0 3rem 0;
    .info{
        padding: 12rem 0 12rem 6rem;
        p{
            font-size: 15px;
            font-weight: 500;
            color: #C6C6C6;
            margin: 1.5rem 0 1.5rem 0;
            margin-bottom: 2rem;
        }
        h3{
            font-size: 48px;
            font-weight: light;
            line-height: 75px;
        }
        
    }
   
    }
     
   
    
    .programs-holder{
        display: flex;
        flex-direction: row;
        width: 50%;
        margin: 3rem;
        text-align: center;
        height: 500px;
        align-items: center;
        justify-content: center;
       
        .program{
            position: relative;
            background-color: white;
            box-shadow: 0px 0px 60px 9px rgba(35,33,34,0.1);
            margin: 3rem;
            padding: 1rem;
            border: 1px solid #3DC2E8;
            height: 280px;
            width: 280px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          
            &:first-child{
                &:before{
                    content: url(${wave});
                    position: absolute;
                    bottom: -20%;
                }
            }
            &:last-child{
                &:after{
                    content: url(${wave});
                    position: absolute;
                    top: -20%;
                }

               transform: translateY(60px);
            }
            
            h4{
                padding-bottom: 2rem;
                font-size: 22px;
                color: #545454;
                font-weight: 400;
            }
            a{
                text-decoration: none;
                color: #3DC2E8;
                font-weight: 300;
                cursor: pointer;
        
                &:hover{
                    color: #3DC2E8;
                }
                &:focus{
                    color: #3DC2E8;
                }
            }
        }
    }


    @media only screen and (max-width: 992px) {
        flex-direction: column;
        .info{
            padding: 6rem 6rem 0 6rem;
            
        }
        .programs-holder{
            width: 100%;
        }
    }

    @media only screen and (max-width: 768px) {
        .info{
            padding: 3rem;
            p{
                font-size: 15px;
                font-weight: 500;
                color: #C6C6C6;
                margin: 1.5rem 0 1.5rem 0;
                margin-bottom: 2rem;
            }
            h3{
                font-size: 30px;
                font-weight: light;
                line-height: 75px;
            }
        }
        .programs-holder{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 3rem;
            text-align: center;
            height: 600px;
            align-items: center;
            justify-content: center;
           
            .program{
                position: relative;
                background-color: white;
                box-shadow: 0px 0px 60px 9px rgba(35,33,34,0.1);
                margin: 3rem;
                padding: 1rem;
                border: 1px solid #3DC2E8;
                height: 280px;
                width: 280px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
    
                &:first-child{
                    &:before{
                        content: url(${wave});
                        position: absolute;
                        bottom: -20%;
                    }
                }
                &:last-child{
                    &:after{
                        content: url(${wave});
                        position: absolute;
                        top: 110%;
                    }
    
                   transform: translateY(60px);
                }

                h3{
                    font-size: 30px;
                    line-height: 50px;
                }
                h4{
                    padding-bottom: 2rem;
                    font-size: 22px;
                    color: #545454;
                    font-weight: 400;
                }
            }
        }
    
    }

    
`

export default Programs;