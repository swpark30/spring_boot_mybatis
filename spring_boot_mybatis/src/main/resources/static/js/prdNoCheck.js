/**
 * 
 */
 $(document).ready(function(){
 	$('#prdNoCheckBtn').on('click', function(){
 		event.preventDefault();
 			
 		if($('#prdNo').val() == ""){
 			alert("상품 번호를 입력해주세요");
 		
 		}else{
 		$.ajax({
 			type:"post",
 			url:"/product/prdNoCheck",
 			data:{"prdNo":$('#prdNo').val()},
			dataType:"text",
			success:function(result){
				// 성공 시 결과 받음
				if(result == "no_use"){
					alert("사용할수 없는 상품번호 입니다.");
				}else{
					alert("사용 가능한 상품번호 입니다.");
				}
			},
			error:function(){
				// 오류있을 경우 수행 되는 함수
				alert("전송 실패");
			},
			complete:function(){
				//alert("작업 완료");
			}
 		
 		});
 		}
 	});
 });