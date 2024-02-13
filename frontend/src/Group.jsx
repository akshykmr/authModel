import React from "react";

const Group = () => {
  return (
    <div className="relative w-[23840px] h-[900px]">
      <div className="fixed w-[23840px] h-[900px] top-0 left-0">
        1
        {/* <div className="absolute w-[1440px] h-[900px] top-0 left-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img className="absolute w-[89px] h-[89px] top-0 left-[342px]" alt="Image" src="image-1.png" />
              <img className="absolute w-[60px] h-[60px] top-[69px] left-0" alt="Image" src="image-2.png" />
              <img className="absolute w-[30px] h-[30px] top-[361px] left-[335px]" alt="Oval" src="oval-1.svg" />
              <img className="absolute w-[16px] h-[16px] top-[25px] left-[111px]" alt="Oval" src="oval-2.svg" />
              <img className="absolute w-[324px] h-[375px] top-[22px] left-[41px]" alt="Image" src="image-3.png" />
              <img className="absolute w-[80px] h-[80px] top-[250px] left-px" alt="Image" src="image-4.png" />
              <img className="absolute w-[59px] h-[50px] top-[119px] left-[312px]" alt="Image" src="image-5.png" />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="left-[59px] absolute top-[27px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Let&#39;s Get Started 🚀
            </div>
            <div className="absolute top-[79px] left-[58px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Sign up your account
            </div>
            <div className="absolute top-[501px] left-[325px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Log in
            </div>
            <div className="absolute top-[501px] left-[152px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
              Already have an account?
            </div>
            <button className="all-[unset] box-border absolute w-[404px] h-[44px] top-[204px] left-[58px] bg-white rounded-[8px] overflow-hidden border border-solid border-[#db4437]">
              <div className="left-[139px] text-[#db4437] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Sign up with Google
              </div>
              <img className="left-[113px] absolute w-[20px] h-[20px] top-[12px]" alt="Google" src="google.svg" />
            </button>
            <button className="all-[unset] box-border absolute w-[404px] h-[44px] top-[264px] left-[58px] bg-white rounded-[8px] overflow-hidden border border-solid border-[#4267b2]">
              <div className="left-[129px] text-[#4267b2] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Sign up with Facebook
              </div>
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[103px]"
                alt="Logo fb simple"
                src="logo-fb-simple.svg"
              />
            </button>
            <button className="all-[unset] box-border w-[404px] h-[44px] top-[144px] left-[58px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="left-[145px] text-white absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Sign Up with Email
              </div>
              <img className="top-[12px] left-[119px] absolute w-[20px] h-[20px]" alt="Mail" src="mail-7.svg" />
            </button>
            <button className="all-[unset] box-border w-[404px] h-[44px] top-[324px] left-[58px] bg-white border border-solid border-[#171a1f] absolute rounded-[8px] overflow-hidden">
              <div className="left-[144px] text-[#171a1f] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Sign up with Apple
              </div>
              <img className="left-[118px] absolute w-[20px] h-[20px] top-[12px]" alt="Apple" src="apple.svg" />
            </button>
            <p className="w-[404px] top-[383px] left-[58px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
              <span className="text-[#9095a0]">
                By continuing you agree to our
                <br />
              </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Terms &amp; Conditions
              </span>
              <span className="text-[#323842]">&nbsp;</span>
              <span className="text-[#9095a0]">and </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">Privacy Policy</span>
            </p>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]" alt="Globe" src="globe-1.svg" />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img className="absolute w-[6px] h-[6px] top-[5px] left-[40px]" alt="Oval" src="oval-3.svg" />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-1.svg"
            />
            <img className="absolute w-[32px] h-[32px] top-[16px] left-[70px]" alt="Image" src="image-6.svg" />
          </div>
        </div> */}
        2
        <div className="absolute w-[1440px] h-[900px] top-0 left-[1600px] bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-7.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-8.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-4.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-5.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-9.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-10.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-11.png"
              />
            </div>
          </div>

          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="left-[31px] absolute top-[27px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Let&#39;s Get Started 🚀
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Sign up your account
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[282px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Continue
              </div>
            </button>
            <div className="top-[146px] absolute w-[451px] h-[43px] left-[34px] bg-gray-100 rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                What is your e-mail?
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Mail"
                src="mail-3.svg"
              />
            </div>
            <div className="w-[451px] h-[43px] top-[214px] left-[34px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Enter your password
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Lock"
                src="lock-2.svg"
              />
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                alt="Remove red eye"
                src="remove-red-eye-3.svg"
              />
            </div>
            <p className="absolute top-[349px] left-[130px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
              <span className="text-[#9095a0]">
                By continuing you agree to our
                <br />
              </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Terms &amp; Conditions
              </span>
              <span className="text-[#323842]">&nbsp;</span>
              <span className="text-[#9095a0]">and </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Privacy Policy
              </span>
            </p>
            <div className="absolute top-[501px] left-[325px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Log in
            </div>
            <div className="absolute top-[501px] left-[152px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
              Already have an account?
            </div>
          </div>

          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-2.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-6.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-2.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-12.svg"
            />
          </div>
        </div>
        3
        <div className="absolute w-[1440px] h-[900px] top-0 left-[3200px] bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-13.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-14.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-7.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-8.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-15.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-16.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-17.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="left-[31px] absolute top-[27px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Let&#39;s Get Started 🚀
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Sign up your account
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[282px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Continue
              </div>
            </button>
            <div className="w-[453px] h-[45px] top-[145px] left-[33px] bg-white border border-solid border-[#00bdd6] absolute rounded-[8px]">
              <div className="relative w-[459px] h-[51px] top-[-4px] left-[-4px] rounded-[8px] border-[5px] border-solid border-[#00bdd633]">
                <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424955] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  jrobinson@hotmail.com
                </div>
                <img
                  className="top-[11px] left-[15px] absolute w-[20px] h-[20px]"
                  alt="Mail"
                  src="mail-6.svg"
                />
              </div>
            </div>
            <div className="w-[451px] h-[43px] top-[214px] left-[34px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Enter your password
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Lock"
                src="lock-5.svg"
              />
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                alt="Remove red eye"
                src="remove-red-eye-6.svg"
              />
            </div>
            <p className="absolute top-[349px] left-[130px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
              <span className="text-[#9095a0]">
                By continuing you agree to our
                <br />
              </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Terms &amp; Conditions
              </span>
              <span className="text-[#323842]">&nbsp;</span>
              <span className="text-[#9095a0]">and </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Privacy Policy
              </span>
            </p>
            <div className="absolute w-[219px] h-[22px] top-[502px] left-[152px]">
              <div className="absolute top-0 left-[173px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                Log in
              </div>
              <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                Already have an account?
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-3.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-9.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-3.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-18.svg"
            />
          </div>
        </div>
        4
        <div className="left-[4800px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="relative h-[900px]">
            <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
              <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
                <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <img
                  className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                  alt="Image"
                  src="image-19.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-[69px] left-0"
                  alt="Image"
                  src="image-20.png"
                />
                <img
                  className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                  alt="Oval"
                  src="oval-10.svg"
                />
                <img
                  className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                  alt="Oval"
                  src="oval-11.svg"
                />
                <img
                  className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                  alt="Image"
                  src="image-21.png"
                />
                <img
                  className="absolute w-[80px] h-[80px] top-[250px] left-px"
                  alt="Image"
                  src="image-22.png"
                />
                <img
                  className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                  alt="Image"
                  src="image-23.png"
                />
              </div>
            </div>
            <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
              <div className="absolute w-[302px] h-[112px] top-[27px] left-[31px]">
                <div className="absolute w-[302px] top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px]">
                  Let&#39;s Get Started 🚀
                </div>
                <div className="absolute w-[194px] top-[52px] left-0 [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px]">
                  Sign up your account
                </div>
              </div>
              <button className="all-[unset] box-border w-[452px] h-[44px] top-[282px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
                <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  Continue
                </div>
              </button>
              <div className="w-[453px] h-[45px] top-[145px] left-[33px] bg-white border border-solid border-[#00bdd6] absolute rounded-[8px]">
                <div className="relative w-[459px] h-[51px] top-[-4px] left-[-4px] rounded-[8px] border-[5px] border-solid border-[#00bdd633]">
                  <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424955] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                    ebailey@gmail.com
                  </div>
                  <img
                    className="top-[11px] left-[15px] absolute w-[20px] h-[20px]"
                    alt="Mail"
                    src="mail-8.svg"
                  />
                </div>
              </div>
              <div className="w-[451px] h-[43px] top-[214px] left-[34px] bg-gray-100 absolute rounded-[8px]">
                <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  Enter your password
                </div>
                <img
                  className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                  alt="Lock"
                  src="lock-6.svg"
                />
                <img
                  className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                  alt="Remove red eye"
                  src="remove-red-eye-7.svg"
                />
              </div>
              <p className="absolute top-[349px] left-[130px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
                <span className="text-[#9095a0]">
                  By continuing you agree to our
                  <br />
                </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Terms &amp; Conditions
                </span>
                <span className="text-[#323842]">&nbsp;</span>
                <span className="text-[#9095a0]">and </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Privacy Policy
                </span>
              </p>
              <div className="absolute w-[219px] h-[22px] top-[502px] left-[152px]">
                <div className="absolute top-0 left-[173px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                  Log in
                </div>
                <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                  Already have an account?
                </div>
              </div>
            </div>
            <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
              <img
                className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
                alt="Globe"
                src="globe-4.svg"
              />
              <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
                <img
                  className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                  alt="Oval"
                  src="oval-12.svg"
                />
                <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                  LOGO
                </div>
              </div>
              <img
                className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
                alt="C question"
                src="c-question-4.svg"
              />
              <img
                className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
                alt="Image"
                src="image-24.svg"
              />
            </div>
            <div className="absolute w-[1440px] h-[900px] top-0 left-0 bg-[#171a1f66]" />
            <div className="w-[548px] h-[434px] top-[233px] left-[446px] rounded-[8px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
              <img
                className="absolute w-[24px] h-[24px] top-[24px] left-[500px]"
                alt="E remove"
                src="e-remove-1.svg"
              />
              <p className="absolute top-[103px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#323842] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                Please type the code we sent you in your email
              </p>
              <div className="absolute top-[47px] left-[180px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#171a1f] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                Almost done
              </div>
              <div className="top-[327px] left-[256px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                51:12
              </div>
              <button className="all-[unset] box-border w-[368px] h-[52px] top-[252px] left-[90px] bg-[#9095a0] absolute rounded-[8px] overflow-hidden">
                <div className="left-[159px] text-white absolute top-[11px] [font-family:'Inter-Regular',Helvetica] font-normal text-[18px] tracking-[0] leading-[28px] whitespace-nowrap">
                  Verify
                </div>
              </button>
              <div className="w-[48px] h-[48px] top-[158px] left-[90px] rounded-[4px] border border-solid border-[#c12126] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[18px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  7
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[154px] rounded-[4px] border border-solid border-[#c12126] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[17px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  0
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[282px] rounded-[4px] border border-solid border-[#c12126] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[16px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  8
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[218px] rounded-[4px] border border-solid border-[#c12126] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[16px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  9
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[410px] rounded-[4px] border border-solid border-[#c12126] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[18px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  1
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[346px] rounded-[4px] border border-solid border-[#c12126] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[16px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  2
                </div>
              </div>
              <p className="absolute top-[379px] left-[128px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                <span className="text-[#171a1f]">
                  Can&#39;t access to your email?{" "}
                </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Contact support
                </span>
              </p>
              <p className="absolute top-[213px] left-[194px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c12126] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                Please enter a valid code
              </p>
            </div>
          </div>
        </div>
        5
        <div className="left-[6400px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="relative h-[900px]">
            <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
              <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
                <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <img
                  className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                  alt="Image"
                  src="image-25.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-[69px] left-0"
                  alt="Image"
                  src="image-26.png"
                />
                <img
                  className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                  alt="Oval"
                  src="oval-13.svg"
                />
                <img
                  className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                  alt="Oval"
                  src="oval-14.svg"
                />
                <img
                  className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                  alt="Image"
                  src="image-27.png"
                />
                <img
                  className="absolute w-[80px] h-[80px] top-[250px] left-px"
                  alt="Image"
                  src="image-28.png"
                />
                <img
                  className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                  alt="Image"
                  src="image-29.png"
                />
              </div>
            </div>
            <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
              <div className="left-[31px] absolute top-[27px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
                Let&#39;s Get Started 🚀
              </div>
              <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                Sign up your account
              </div>
              <button className="all-[unset] box-border w-[452px] h-[44px] top-[282px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
                <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  Continue
                </div>
              </button>
              <div className="w-[453px] h-[45px] top-[145px] left-[33px] bg-white border border-solid border-[#00bdd6] absolute rounded-[8px]">
                <div className="relative w-[459px] h-[51px] top-[-4px] left-[-4px] rounded-[8px] border-[5px] border-solid border-[#00bdd633]">
                  <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424955] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                    ebailey@gmail.com
                  </div>
                  <img
                    className="top-[11px] left-[15px] absolute w-[20px] h-[20px]"
                    alt="Mail"
                    src="mail-9.svg"
                  />
                </div>
              </div>
              <div className="w-[451px] h-[43px] top-[214px] left-[34px] bg-gray-100 absolute rounded-[8px]">
                <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  Enter your password
                </div>
                <img
                  className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                  alt="Lock"
                  src="lock-7.svg"
                />
                <img
                  className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                  alt="Remove red eye"
                  src="remove-red-eye-8.svg"
                />
              </div>
              <p className="absolute top-[349px] left-[130px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
                <span className="text-[#9095a0]">
                  By continuing you agree to our
                  <br />
                </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Terms &amp; Conditions
                </span>
                <span className="text-[#323842]">&nbsp;</span>
                <span className="text-[#9095a0]">and </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Privacy Policy
                </span>
              </p>
              <div className="absolute w-[219px] h-[22px] top-[502px] left-[152px]">
                <div className="absolute top-0 left-[173px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                  Log in
                </div>
                <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                  Already have an account?
                </div>
              </div>
            </div>
            <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
              <img
                className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
                alt="Globe"
                src="globe-5.svg"
              />
              <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
                <img
                  className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                  alt="Oval"
                  src="oval-15.svg"
                />
                <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                  LOGO
                </div>
              </div>
              <img
                className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
                alt="C question"
                src="c-question-5.svg"
              />
              <img
                className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
                alt="Image"
                src="image-30.svg"
              />
            </div>
            <div className="absolute w-[1440px] h-[900px] top-0 left-0 bg-[#171a1f66]" />
            <div className="w-[548px] h-[434px] top-[233px] left-[446px] rounded-[8px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
              <img
                className="absolute w-[24px] h-[24px] top-[24px] left-[500px]"
                alt="E remove"
                src="e-remove-2.svg"
              />
              <p className="absolute top-[103px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#323842] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                Please type the code we sent you in your email
              </p>
              <div className="absolute top-[47px] left-[180px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#171a1f] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                Almost done
              </div>
              <div className="top-[327px] left-[257px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                32:06
              </div>
              <button className="all-[unset] box-border w-[368px] h-[52px] top-[252px] left-[90px] bg-[#d3f9e0] absolute rounded-[8px] overflow-hidden">
                <div className="left-[175px] text-[#117b34] absolute top-[11px] [font-family:'Inter-Regular',Helvetica] font-normal text-[18px] tracking-[0] leading-[28px] whitespace-nowrap">
                  Verify
                </div>
                <img
                  className="absolute w-[24px] h-[24px] top-[14px] left-[143px]"
                  alt="Loading"
                  src="loading-2.svg"
                />
              </button>
              <div className="w-[48px] h-[48px] top-[158px] left-[90px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[18px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  7
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[154px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[17px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  0
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[282px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[16px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  3
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[218px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[16px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  9
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[410px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[18px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  3
                </div>
              </div>
              <div className="w-[48px] h-[48px] top-[158px] left-[346px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
                <div className="left-[16px] absolute top-[5px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#171a1f] text-[24px] text-center tracking-[0] leading-[36px] whitespace-nowrap">
                  3
                </div>
              </div>
              <p className="absolute top-[379px] left-[128px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                <span className="text-[#171a1f]">
                  Can&#39;t access to your email?{" "}
                </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Contact support
                </span>
              </p>
            </div>
          </div>
        </div>
        6
        <div className="absolute w-[1440px] h-[900px] top-0 left-[8000px] bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="relative h-[900px]">
            <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
              <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
                <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
                <img
                  className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                  alt="Image"
                  src="image-31.png"
                />
                <img
                  className="absolute w-[60px] h-[60px] top-[69px] left-0"
                  alt="Image"
                  src="image-32.png"
                />
                <img
                  className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                  alt="Oval"
                  src="oval-16.svg"
                />
                <img
                  className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                  alt="Oval"
                  src="oval-17.svg"
                />
                <img
                  className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                  alt="Image"
                  src="image-33.png"
                />
                <img
                  className="absolute w-[80px] h-[80px] top-[250px] left-px"
                  alt="Image"
                  src="image-34.png"
                />
                <img
                  className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                  alt="Image"
                  src="image-35.png"
                />
              </div>
            </div>
            <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
              <div className="absolute w-[302px] h-[112px] top-[27px] left-[31px]">
                <div className="absolute w-[302px] top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px]">
                  Let&#39;s Get Started 🚀
                </div>
                <div className="absolute w-[194px] top-[52px] left-0 [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px]">
                  Sign up your account
                </div>
              </div>
              <button className="all-[unset] box-border w-[452px] h-[44px] top-[282px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
                <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  Continue
                </div>
              </button>
              <div className="w-[453px] h-[45px] top-[145px] left-[33px] bg-white border border-solid border-[#00bdd6] absolute rounded-[8px]">
                <div className="relative w-[459px] h-[51px] top-[-4px] left-[-4px] rounded-[8px] border-[5px] border-solid border-[#00bdd633]">
                  <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424955] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                    ebailey@gmail.com
                  </div>
                  <img
                    className="top-[11px] left-[15px] absolute w-[20px] h-[20px]"
                    alt="Mail"
                    src="mail-10.svg"
                  />
                </div>
              </div>
              <div className="w-[451px] h-[43px] top-[214px] left-[34px] bg-gray-100 absolute rounded-[8px]">
                <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  Enter your password
                </div>
                <img
                  className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                  alt="Lock"
                  src="lock-8.svg"
                />
                <img
                  className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                  alt="Remove red eye"
                  src="remove-red-eye-9.svg"
                />
              </div>
              <p className="absolute top-[349px] left-[130px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
                <span className="text-[#9095a0]">
                  By continuing you agree to our
                  <br />
                </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Terms &amp; Conditions
                </span>
                <span className="text-[#323842]">&nbsp;</span>
                <span className="text-[#9095a0]">and </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Privacy Policy
                </span>
              </p>
              <div className="absolute w-[219px] h-[22px] top-[502px] left-[152px]">
                <div className="absolute top-0 left-[173px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                  Log in
                </div>
                <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                  Already have an account?
                </div>
              </div>
            </div>
            <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
              <img
                className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
                alt="Globe"
                src="globe-6.svg"
              />
              <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
                <img
                  className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                  alt="Oval"
                  src="oval-18.svg"
                />
                <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                  LOGO
                </div>
              </div>
              <img
                className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
                alt="C question"
                src="c-question-6.svg"
              />
              <img
                className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
                alt="Image"
                src="image-36.svg"
              />
            </div>
            <div className="absolute w-[1440px] h-[900px] top-0 left-0 bg-[#171a1f66]" />
            <div className="w-[548px] h-[434px] top-[233px] left-[446px] rounded-[8px] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white">
              <img
                className="absolute w-[24px] h-[24px] top-[24px] left-[500px]"
                alt="E remove"
                src="e-remove-3.svg"
              />
              <p className="absolute top-[103px] left-[121px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#323842] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                Please type the code we sent you in your email
              </p>
              <div className="absolute top-[47px] left-[180px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#171a1f] text-[32px] text-center tracking-[0] leading-[48px] whitespace-nowrap">
                Almost done
              </div>
              <div className="top-[321px] left-[257px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                01:00
              </div>
              <button className="all-[unset] box-border w-[368px] h-[52px] top-[252px] left-[90px] bg-[#9095a0] absolute rounded-[8px] overflow-hidden">
                <div className="left-[159px] text-white absolute top-[11px] [font-family:'Inter-Regular',Helvetica] font-normal text-[18px] tracking-[0] leading-[28px] whitespace-nowrap">
                  Verify
                </div>
              </button>
              <div className="w-[48px] h-[48px] top-[158px] left-[90px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white" />
              <div className="w-[48px] h-[48px] top-[158px] left-[154px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white" />
              <div className="w-[48px] h-[48px] top-[158px] left-[282px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white" />
              <div className="w-[48px] h-[48px] top-[158px] left-[218px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white" />
              <div className="w-[48px] h-[48px] top-[158px] left-[410px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white" />
              <div className="w-[48px] h-[48px] top-[158px] left-[346px] rounded-[4px] border border-solid border-[#9095a0] shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] absolute bg-white" />
              <p className="absolute top-[379px] left-[128px] [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                <span className="text-[#171a1f]">
                  Can&#39;t access to your email?{" "}
                </span>
                <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                  Contact support
                </span>
              </p>
            </div>
          </div>
        </div>
        7
        <div className="left-[9600px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-37.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-38.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-19.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-20.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-39.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-40.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-41.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[590px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="left-[31px] absolute top-[27px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Let&#39;s Get Started 🚀
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Sign up your account
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[334px] left-[31px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[154px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Create my account
              </div>
            </button>
            <div className="w-[451px] h-[43px] top-[152px] left-[31px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                jrobinson@hotmail.com
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Mail"
                src="mail-11.svg"
              />
            </div>
            <div className="w-[451px] h-[43px] top-[220px] left-[31px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Hellojrobinson@123
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Lock"
                src="lock-9.svg"
              />
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                alt="Remove red eye"
                src="remove-red-eye-10.svg"
              />
            </div>
            <div className="absolute w-[452px] h-[4px] top-[280px] left-[31px] bg-[#117b34] rounded-[2px]" />
            <p className="absolute w-[423px] top-[287px] left-[31px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#117b34] text-[14px] tracking-[0] leading-[22px]">
              Great job! Your password is strong.
            </p>
            <p className="top-[388px] left-[127px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
              <span className="text-[#9095a0]">
                By continuing you agree to our
                <br />
              </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Terms &amp; Conditions
              </span>
              <span className="text-[#323842]">&nbsp;</span>
              <span className="text-[#9095a0]">and </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Privacy Policy
              </span>
            </p>
            <div className="absolute w-[219px] h-[22px] top-[548px] left-[152px]">
              <div className="absolute top-0 left-[173px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                Log in
              </div>
              <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                Already have an account?
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-7.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-21.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-7.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-42.svg"
            />
          </div>
        </div>
        8
        <div className="left-[11200px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-43.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-44.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-22.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-23.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-45.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-46.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-47.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[580px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="left-[31px] absolute top-[27px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Let&#39;s Get Started 🚀
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Sign up your account
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[378px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Continue
              </div>
            </button>
            <div className="top-[152px] absolute w-[451px] h-[43px] left-[34px] bg-gray-100 rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                jrobinson@hotmail.com
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Mail"
                src="mail-12.svg"
              />
            </div>
            <div className="w-[453px] h-[45px] top-[219px] left-[33px] bg-white border border-solid border-[#de3b40] absolute rounded-[8px]">
              <div className="relative w-[459px] h-[51px] top-[-4px] left-[-4px] rounded-[8px] border-[5px] border-solid border-[#de3b4033]">
                <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  hello
                </div>
                <img
                  className="top-[11px] left-[15px] absolute w-[20px] h-[20px]"
                  alt="Lock"
                  src="lock-10.svg"
                />
                <img
                  className="left-[415px] absolute w-[20px] h-[20px] top-[11px]"
                  alt="Remove red eye"
                  src="remove-red-eye-11.svg"
                />
              </div>
            </div>
            <div className="absolute w-[150px] h-[4px] top-[280px] left-[34px] bg-[#c12126] rounded-[2px]" />
            <p className="absolute w-[423px] top-[287px] left-[34px] [font-family:'Inter-Bold',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[22px]">
              <span className="font-bold text-[#c12126]">
                Your password is weak.
              </span>
              <span className="[font-family:'Inter-Regular',Helvetica] text-[#9095a0]">
                {" "}
                Please choose a password that is at least{" "}
              </span>
              <span className="[font-family:'Inter-Regular',Helvetica] text-[#171a1f]">
                8 characters long (letters, numbers, and symbols)
              </span>
              <span className="[font-family:'Inter-Regular',Helvetica] text-[#9095a0]">
                {" "}
                to make it more secure.
              </span>
            </p>
            <p className="top-[437px] left-[130px] absolute [font-family:'Inter-Regular',Helvetica] font-normal text-transparent text-[14px] text-center tracking-[0] leading-[22px]">
              <span className="text-[#9095a0]">
                By continuing you agree to our
                <br />
              </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Terms &amp; Conditions
              </span>
              <span className="text-[#323842]">&nbsp;</span>
              <span className="text-[#9095a0]">and </span>
              <span className="[font-family:'Rubik-Medium',Helvetica] font-medium text-[#323842]">
                Privacy Policy
              </span>
            </p>
            <div className="absolute w-[219px] h-[22px] top-[542px] left-[152px]">
              <div className="absolute top-0 left-[173px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                Log in
              </div>
              <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                Already have an account?
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-8.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-24.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-8.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-48.svg"
            />
          </div>
        </div>
        9
        <div className="left-[12800px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-49.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-50.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-25.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-26.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-51.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-52.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-53.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] overflow-hidden shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="left-[31px] absolute top-[27px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Let&#39;s Get Started 🚀
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Sign up your account
            </div>
            <img
              className="absolute w-[36px] h-[36px] top-[257px] left-[245px]"
              alt="Loading"
              src="loading-2-1.svg"
            />
            <div className="absolute top-[308px] left-[204px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
              Just one second...
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-9.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-27.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-9.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-54.svg"
            />
          </div>
        </div>
        10
        <div className="absolute w-[1440px] h-[900px] top-0 left-[14400px] bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-55.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-56.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-28.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-29.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-57.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-58.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-59.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="absolute top-[27px] left-[59px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Welcome back 👋
            </div>
            <div className="absolute top-[79px] left-[58px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Log in your account
            </div>
            <div className="absolute top-[501px] left-[325px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Sign up
            </div>
            <div className="absolute top-[501px] left-[166px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
              Don&#39;t have an account?
            </div>
            <button className="all-[unset] box-border w-[404px] h-[44px] top-[237px] left-[58px] bg-white border border-solid border-[#db4437] absolute rounded-[8px] overflow-hidden">
              <div className="left-[144px] text-[#db4437] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Log in with Google
              </div>
              <img
                className="left-[118px] absolute w-[20px] h-[20px] top-[12px]"
                alt="Google"
                src="google-2.svg"
              />
            </button>
            <button className="all-[unset] box-border w-[404px] h-[44px] top-[297px] left-[58px] bg-white border border-solid border-[#4267b2] absolute rounded-[8px] overflow-hidden">
              <div className="left-[134px] text-[#4267b2] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Log in with Facebook
              </div>
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[108px]"
                alt="Logo fb simple"
                src="logo-fb-simple-2.svg"
              />
            </button>
            <button className="all-[unset] box-border w-[404px] h-[44px] top-[177px] left-[58px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="left-[152px] text-white absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Log in with Email
              </div>
              <img
                className="top-[12px] left-[126px] absolute w-[20px] h-[20px]"
                alt="Mail"
                src="mail-13.svg"
              />
            </button>
            <button className="all-[unset] box-border w-[404px] h-[44px] top-[357px] left-[58px] bg-white border border-solid border-[#171a1f] absolute rounded-[8px] overflow-hidden">
              <div className="left-[150px] text-[#171a1f] absolute top-[8px] [font-family:'Inter-Regular',Helvetica] font-normal text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Log in with Apple
              </div>
              <img
                className="left-[124px] absolute w-[20px] h-[20px] top-[12px]"
                alt="Apple"
                src="apple-2.svg"
              />
            </button>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-10.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-30.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-10.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-60.svg"
            />
          </div>
        </div>
        11
        <div className="absolute w-[1440px] h-[900px] top-0 left-[16000px] bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-61.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-62.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-31.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-32.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-63.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-64.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-65.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="absolute top-[27px] left-[31px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Welcome back 👋
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Log in your account
            </div>
            <div className="absolute top-[497px] left-[314px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Sign up
            </div>
            <div className="absolute top-[497px] left-[155px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
              Don&#39;t have an account?
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[344px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Continue
              </div>
            </button>
            <div className="w-[451px] h-[43px] top-[238px] left-[34px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Enter your password
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Lock"
                src="lock.svg"
              />
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                alt="Remove red eye"
                src="remove-red-eye.svg"
              />
            </div>
            <div className="w-[451px] h-[43px] top-[170px] left-[34px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                What is your e-mail?
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Mail"
                src="mail.svg"
              />
            </div>
            <div className="absolute w-[130px] top-[297px] left-[356px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00bdd6] text-[14px] text-right tracking-[0] leading-[22px]">
              Forgot password?
            </div>
            <div className="w-[278px] top-[298px] left-[33px] absolute h-[22px]">
              <div className="relative h-[22px]">
                <div className="absolute w-[16px] h-[16px] top-[3px] left-0 bg-[#0095a9] rounded-[2px]">
                  <img
                    className="absolute w-[12px] h-[12px] top-[2px] left-[2px]"
                    alt="Frame"
                    src="frame.svg"
                  />
                </div>
                <div className="absolute w-[256px] -top-px left-[22px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px]">
                  Remember me
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-11.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-33.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-11.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-66.svg"
            />
          </div>
        </div>
        <div className="left-[17600px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-67.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-68.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-34.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-35.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-69.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-70.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-71.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="absolute top-[27px] left-[31px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Welcome back 👋
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Log in your account
            </div>
            <div className="absolute top-[497px] left-[314px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Sign up
            </div>
            <div className="absolute top-[497px] left-[155px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
              Don&#39;t have an account?
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[344px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Continue
              </div>
            </button>
            <div className="w-[451px] h-[43px] top-[238px] left-[34px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bcc1ca] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Enter your password
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Lock"
                src="image.svg"
              />
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                alt="Remove red eye"
                src="remove-red-eye-2.svg"
              />
            </div>
            <p className="absolute top-[203px] left-[37px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c12126] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Couldn&#39;t find your email. Please check and try again.
            </p>
            <div className="w-[453px] h-[45px] top-[151px] left-[33px] bg-white border border-solid border-[#de3b40] absolute rounded-[8px]">
              <div className="relative w-[459px] h-[51px] top-[-4px] left-[-4px] rounded-[8px] border-[5px] border-solid border-[#de3b4033]">
                <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424955] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  jrobinson@hotmail,com
                </div>
                <img
                  className="top-[11px] left-[15px] absolute w-[20px] h-[20px]"
                  alt="Mail"
                  src="mail-2.svg"
                />
              </div>
            </div>
            <div className="absolute w-[130px] top-[297px] left-[356px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00bdd6] text-[14px] text-right tracking-[0] leading-[22px]">
              Forgot password?
            </div>
            <div className="w-[323px] top-[298px] left-[33px] absolute h-[22px]">
              <div className="relative h-[22px]">
                <div className="absolute w-[16px] h-[16px] top-[3px] left-0 bg-[#0095a9] rounded-[2px]">
                  <img
                    className="absolute w-[12px] h-[12px] top-[2px] left-[2px]"
                    alt="Frame"
                    src="frame-2.svg"
                  />
                </div>
                <div className="absolute w-[301px] -top-px left-[22px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px]">
                  Remember me
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-12.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-36.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-12.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-72.svg"
            />
          </div>
        </div>
        12
        <div className="left-[19200px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-73.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-74.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-37.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-38.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-75.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-76.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-77.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="absolute top-[27px] left-[31px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Welcome back 👋
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Log in your account
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[348px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Continue
              </div>
            </button>
            <div className="absolute w-[215px] h-[22px] top-[489px] left-[155px]">
              <div className="absolute top-0 left-[159px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
                Sign up
              </div>
              <div className="absolute top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
                Don&#39;t have an account?
              </div>
            </div>
            <div className="absolute w-[455px] h-[22px] top-[302px] left-[33px]">
              <div className="absolute w-[130px] top-0 left-[323px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00bdd6] text-[14px] text-right tracking-[0] leading-[22px]">
                Forgot password?
              </div>
              <div className="w-[323px] top-0 left-0 absolute h-[22px]">
                <div className="relative h-[22px]">
                  <div className="absolute w-[16px] h-[16px] top-[3px] left-0 bg-[#0095a9] rounded-[2px]">
                    <img
                      className="absolute w-[12px] h-[12px] top-[2px] left-[2px]"
                      alt="Frame"
                      src="frame-3.svg"
                    />
                  </div>
                  <div className="absolute w-[301px] -top-px left-[22px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px]">
                    Remember me
                  </div>
                </div>
              </div>
            </div>
            <div className="top-[152px] absolute w-[451px] h-[43px] left-[34px] bg-gray-100 rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                jrobinson@hotmail.com
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Mail"
                src="mail-4.svg"
              />
            </div>
            <div className="w-[458px] h-[45px] top-[219px] left-[30px] bg-white border border-solid border-[#de3b40] absolute rounded-[8px]">
              <div className="relative w-[464px] h-[51px] top-[-4px] left-[-4px] rounded-[8px] border-[5px] border-solid border-[#de3b4033]">
                <div className="absolute top-[8px] left-[43px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#424955] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                  www
                </div>
                <img
                  className="top-[11px] left-[15px] absolute w-[20px] h-[20px]"
                  alt="Lock"
                  src="lock-3.svg"
                />
                <img
                  className="left-[420px] absolute w-[20px] h-[20px] top-[11px]"
                  alt="Remove red eye"
                  src="remove-red-eye-4.svg"
                />
              </div>
            </div>
            <p className="absolute top-[271px] left-[31px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#c12126] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Wrong password. Please try again.
            </p>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-13.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-39.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-13.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-78.svg"
            />
          </div>
        </div>
        13
        <div className="absolute w-[1440px] h-[900px] top-0 left-[20800px] bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-79.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-80.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-40.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-41.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-81.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-82.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-83.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="absolute top-[27px] left-[31px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Welcome back 👋
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Log in your account
            </div>
            <div className="absolute top-[497px] left-[314px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#00bdd6] text-[14px] tracking-[0] leading-[22px] whitespace-nowrap">
              Sign up
            </div>
            <div className="absolute top-[497px] left-[155px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-right tracking-[0] leading-[22px] whitespace-nowrap">
              Don&#39;t have an account?
            </div>
            <button className="all-[unset] box-border w-[452px] h-[44px] top-[344px] left-[34px] bg-[#00bdd6] absolute rounded-[8px] overflow-hidden">
              <div className="absolute top-[8px] left-[192px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Continue
              </div>
            </button>
            <div className="w-[451px] h-[43px] top-[238px] left-[34px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                Hellojrobinson@123
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Lock"
                src="lock-4.svg"
              />
              <img
                className="absolute w-[20px] h-[20px] top-[12px] left-[416px]"
                alt="Remove red eye"
                src="remove-red-eye-5.svg"
              />
            </div>
            <div className="w-[451px] h-[43px] top-[170px] left-[34px] bg-gray-100 absolute rounded-[8px]">
              <div className="absolute top-[8px] left-[44px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[16px] tracking-[0] leading-[26px] whitespace-nowrap">
                jrobinson@hotmail.com
              </div>
              <img
                className="top-[12px] left-[16px] absolute w-[20px] h-[20px]"
                alt="Mail"
                src="mail-5.svg"
              />
            </div>
            <div className="absolute w-[130px] top-[297px] left-[356px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00bdd6] text-[14px] text-right tracking-[0] leading-[22px]">
              Forgot password?
            </div>
            <div className="w-[323px] top-[298px] left-[33px] absolute h-[22px]">
              <div className="relative h-[22px]">
                <div className="absolute w-[16px] h-[16px] top-[3px] left-0 bg-[#0095a9] rounded-[2px]">
                  <img
                    className="absolute w-[12px] h-[12px] top-[2px] left-[2px]"
                    alt="Frame"
                    src="frame-4.svg"
                  />
                </div>
                <div className="absolute w-[301px] -top-px left-[22px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] tracking-[0] leading-[22px]">
                  Remember me
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-14.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-42.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-14.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-84.svg"
            />
          </div>
        </div>
        14
        <div className="left-[22400px] absolute w-[1440px] h-[900px] top-0 bg-white shadow-[0px_3px_6px_#120f281f]">
          <div className="w-[439px] h-[409px] top-[256px] left-[166px] rounded-[4px] absolute bg-white">
            <div className="relative w-[431px] h-[396px] top-[6px] left-[4px]">
              <div className="absolute w-[223px] h-[257px] top-[51px] left-[190px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <div className="absolute w-[149px] h-[116px] top-[99px] left-[17px] rounded-[24px] border-[3px] border-solid border-[#d9cbf6]" />
              <img
                className="absolute w-[89px] h-[89px] top-0 left-[342px]"
                alt="Image"
                src="image-85.png"
              />
              <img
                className="absolute w-[60px] h-[60px] top-[69px] left-0"
                alt="Image"
                src="image-86.png"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[361px] left-[335px]"
                alt="Oval"
                src="oval-43.svg"
              />
              <img
                className="absolute w-[16px] h-[16px] top-[25px] left-[111px]"
                alt="Oval"
                src="oval-44.svg"
              />
              <img
                className="absolute w-[324px] h-[375px] top-[22px] left-[41px]"
                alt="Image"
                src="image-87.png"
              />
              <img
                className="absolute w-[80px] h-[80px] top-[250px] left-px"
                alt="Image"
                src="image-88.png"
              />
              <img
                className="absolute w-[59px] h-[50px] top-[119px] left-[312px]"
                alt="Image"
                src="image-89.png"
              />
            </div>
          </div>
          <div className="w-[519px] h-[540px] top-[180px] left-[747px] rounded-[8px] shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <div className="absolute top-[27px] left-[31px] [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[32px] tracking-[0] leading-[48px] whitespace-nowrap">
              Welcome back 👋
            </div>
            <div className="absolute top-[79px] left-[31px] [font-family:'Epilogue-Regular',Helvetica] font-normal text-[#9095a0] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
              Log in your account
            </div>
            <img
              className="absolute w-[36px] h-[36px] top-[257px] left-[245px]"
              alt="Loading"
              src="loading-2-2.svg"
            />
            <div className="absolute top-[308px] left-[204px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#171a1f] text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
              Just one second...
            </div>
          </div>
          <div className="w-[1440px] h-[64px] top-0 left-0 shadow-[0px_2px_5px_#171a1f17,0px_0px_2px_#171a1f1f] absolute bg-white">
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1304px]"
              alt="Globe"
              src="globe-15.svg"
            />
            <div className="absolute w-[54px] h-[30px] top-[16px] left-[114px]">
              <img
                className="absolute w-[6px] h-[6px] top-[5px] left-[40px]"
                alt="Oval"
                src="oval-45.svg"
              />
              <div className="absolute top-0 left-0 [font-family:'Epilogue-Bold',Helvetica] font-bold text-[#171a1f] text-[20px] tracking-[0] leading-[30px] whitespace-nowrap">
                LOGO
              </div>
            </div>
            <img
              className="absolute w-[20px] h-[20px] top-[21px] left-[1340px]"
              alt="C question"
              src="c-question-15.svg"
            />
            <img
              className="absolute w-[32px] h-[32px] top-[16px] left-[70px]"
              alt="Image"
              src="image-90.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
