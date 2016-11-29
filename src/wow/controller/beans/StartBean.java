package wow.controller.beans;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;

import br.edu.unisep.model.dao.DAOGenerico;
import wow.model.WordsVO;

@ManagedBean
@SessionScoped
public class StartBean {

	private List<WordsVO> palavras;
	private String word;

	@PostConstruct
	public void obterLista() {
		DAOGenerico<WordsVO> dao = new DAOGenerico<WordsVO>();
		palavras = dao.listar(WordsVO.class);	
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	public List<WordsVO> getPalavras() {
		return palavras;
	}

	public void setPalavras(List<WordsVO> palavras) {
		this.palavras = palavras;
	}
	
}
