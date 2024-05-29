import React from 'react'
import "./Review.css"

function Review() {
  return (
    <div className='container'>
         <h2 className=" mt-20 mb-10 text-4xl font-bold mb-4 flex justify-center text-[#f92e9e]">
         Reviews From Our Cients
      </h2>
      <div class="resensies_cards flex flex-wrap">
				<div class="resensie_card ">
					<div class="res_icons">
						<div class="icon_res icon_res1"></div>
					</div>
					<div class="res_tit"> Кирилл </div>
					<p class="res_small-txt">Постоянный клиент</p>
					<p class="res_txt">"Понравилась то как выполнили работу : все четко, все полученные комментарии и
						просьбы были учтены и выполнены. Приятно осознавать, что есть возможность рассчитывать на
						совершенно незнакомого человека, который грамотно выполняет свои обязанности"</p>
				</div>
				<div class="resensie_card">
					<div class="res_icons flex">
						<div class="icon_res icon_res2"></div>
					</div>
					<div class="res_tit">Семья Шеровых</div>
					<p class="res_small-txt">Метрологи</p>
					<p class="res_txt">
						"Курьер быстро нашелся, быстро доставил никаких проблем, будем пользоваться еще! В отличии от
						конкурентов, курьер приехал и забрал заказ, в другом сервисе курьер так и был на стадии
						поиска... Впечатления от первого заказа только положительные!"</p>
				</div>
				<div class="resensie_card ">
					<div class="res_icons">
						<div class="icon_res icon_res3"></div>
					</div>
					<div class="res_tit">Элиза</div>
					<p class="res_small-txt">Государственный работник</p>
					<p class="res_txt">"Часто пользуемся их услугами , очень радует цена на доставку по Бишкеку,
						значительно дешевле других агреграторов,однозначно рекомендую 👍"</p>
				</div>
                <div class="resensie_card ">
					<div class="res_icons">
						<div class="icon_res icon_res3"></div>
					</div>
					<div class="res_tit">Элиза</div>
					<p class="res_small-txt">Государственный работник</p>
					<p class="res_txt">"Часто пользуемся их услугами , очень радует цена на доставку по Бишкеку,
						значительно дешевле других агреграторов,однозначно рекомендую 👍"</p>
				</div>
                <div class="resensie_card ">
					<div class="res_icons">
						<div class="icon_res icon_res3"></div>
					</div>
					<div class="res_tit">Элиза</div>
					<p class="res_small-txt">Государственный работник</p>
					<p class="res_txt">"Часто пользуемся их услугами , очень радует цена на доставку по Бишкеку,
						значительно дешевле других агреграторов,однозначно рекомендую 👍"</p>
				</div>




			</div>
    </div>
  )
}

export default Review