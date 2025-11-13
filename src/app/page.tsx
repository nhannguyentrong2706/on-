import Image from 'next/image';

export default function Home() {
	return (
		<div className="container ">
			<div className="main flex flex-col justify-start items-start">
				<div className="title flex">
					<img
						src="/images/41205a56f52c4a049eb751611a2967f6a75f8326.png"
						alt=""
						className="logo"
					/>
					<div className="desc flex flex-col">
						<div className="desc1">SIÊU ỨNG DỤNG THỂ THAO, GIẢI TRÍ</div>
						<div className="desc2">HÀNG ĐẦU VIỆT NAM</div>
					</div>
				</div>

				<ul className="list flex flex-col">
					<li className="item flex">
						<img src="/images/tick-circle.png" alt="" />
						<div className="desc">
							<span className="desc1">
								Xem trực tiếp các giải thể thao đẳng cấp:
								<br />
							</span>
							Champions League, Europa League, Ligue 1, Serie A, Tennis, Bóng
							chuyền,...
						</div>
					</li>
					<li className="item flex">
						<img src="/images/tick-circle.png" alt="" />
						<div className="desc">
							Trọn vẹn đam mê cùng các{' '}
							<span className="desc2">
								giải đấu Esports đỉnh cao và giải trí bất tận
							</span>
						</div>
					</li>
					<li className="item flex">
						<img src="/images/tick-circle.png" alt="" />
						<div className="desc">
							Sở hữu các kênh{' '}
							<span className="desc2">
								truyền hình Quốc gia và kênh phát sóng Thể thao đặc sắc
							</span>
						</div>
					</li>
				</ul>

				<div className="download flex flex-col">
					<div className="text">ĐĂNG KÝ NGAY</div>
					<div className="main flex">
						<img
							src="/images/b99952171d4b5aa6b0ef84fe88fd7853a5cc12ed.jpg"
							alt=""
							className="qr"
						/>
						<div className="list flex flex-col">
							<button className="item flex">
								<img src="/images/Group 3.png" alt="" />
							</button>
							<button className="item flex">
								<img src="/images/Group 2.png" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="register flex flex-col">
				<div className="header flex flex-col justify-center items-center">
					<div className="desc">XEM TRỌN VẸN CÁC GIẢI ĐẤU</div>
					<div className="price">CHỈ TỪ 7000đ</div>
				</div>
				<div className="plans flex flex-row">
					<div className="plan">
						<div className="name">ONMAX7</div>

						<div className="sendto">
							<span>gửi</span>888
						</div>
					</div>
					/
					<div className="plan">
						<div className="name">ONMAX10</div>

						<div className="sendto">
							<span>gửi</span>888
						</div>
					</div>
				</div>
				<ul className="detail">
					<li className="text">
						Data siêu khủng <span>mỗi ngày</span>
					</li>
					<li className="text">
						<span>Nhận 05 lượt quay may mắn với cơ hội trúng </span> <br />
						IPHONE 17 PRO MAX
					</li>
				</ul>
			</div>
			<img
				className="float3"
				src="/images/50bed5ab36a239ee6003dfcfc727cde38790f12d.png" //laptop
				alt=""
			/>
			<img
				className="float1"
				src="/images/562d385efd4b2eafdaead894df984ef74804a617.png" // c1
				alt=""
			/>
			<img
				className="float2"
				src="/images/d6b8265343c03dfbcdddb84a4d134d69115add77.png" // mobile tablet
				alt=""
			/>
			<img
				className="float4"
				src="/images/Mask group (1).png" // wheel
				alt=""
			/>
			<div className="topleft"></div>
			<div className="topright"></div>
		</div>
	);
}
