/**
 * 
 */
 
 $(document).ready(function(){
 	$('#prdSearchForm').on('submit', function(){
 		event.preventDefault();
 			
 		// serialize(): 폼에 입력한 값들을 쿼리 스트링 방식의 데이터로 변환
 		// type=prdName&keyword=노트북
 		var formData = $(this).serialize();	
 			
 		$.ajax({
 			type:"post",
 			url:"productSearch2",
 			data:formData,
			success:function(result){// 컨트롤러에서 반환한 prdList를 result가 받음
				// 반환된 결과를 searchResultBox <div>에 삽입
				$('#searchResultBox').html(result);
 			},
	
			error:function(){
				// 오류있을 경우 수행 되는 함수
				alert("전송 실패");
			},
			complete:function(){
				//alert("작업 완료");
			}
 		
 		});
 	});
 });